<template>
  <HorView :title="query.title ?? '详情'">
    <ProSkeleton v-if="!data" :loading="loading" :error="error" @refresh="trigger" />
    <template v-else>
      <div class="c-user-info">
        <div class="user">
          <UserAvatar class="c-avatar" :src="computedApplyDetail?.iconPath" />
          <div class="user-info-content">
            <span class="name">{{ computedApplyDetail?.username }}</span>
            <span class="c-text-primary">{{
              applyStatusLabelMap(computedApplyDetail?.submitStatus!, computedApplyDetail?.status!)
            }}</span>
          </div>
        </div>
      </div>

      <div class="c-bar"></div>

      <ProSchemaRender :fields="fields" :source="computedApplyDetail" />

      <div class="c-bar"></div>
      <VanSteps
        v-if="data.logs && data.logs.length"
        direction="vertical"
        :active="computedIsActive"
        active-color="#1890FF"
      >
        <VanStep v-for="(item, index) in data.logs" :key="index">
          <div class="c-col-item">
            <UserAvatar class="c-avatar" :src="item.iconPath" />
            <div class="c-col-item-content">
              <div class="c-col-item-title">
                <span class="title">{{ item?.username }}</span>
                <span class="sub-text">{{ item?.activityDt }}</span>
              </div>
              <div class="c-col-item-text">
                <span class="c-text-primary">{{ item.description }}</span>
              </div>
            </div>
          </div>
        </VanStep>
      </VanSteps>
      <!-- <RelationSection :src-id="loginId" src-type="1" /> -->

      <ProEndDivider />

      <HorFixedActions
        v-if="
          computedApplyDetail &&
          ['init', 'submit', 'withdraw'].includes(computedApplyDetail?.status)
        "
      >
        <VanButton
          v-if="['withdraw'].includes(computedApplyDetail.submitStatus)"
          class="c-button"
          type="primary"
          @click="handleEdit"
          >编辑</VanButton
        >

        <VanButton
          v-if="['submit'].includes(computedApplyDetail.submitStatus)"
          class="c-button"
          type="danger"
          @click="doApplyRemind"
          >催促</VanButton
        >
        <VanButton
          v-if="['submit'].includes(computedApplyDetail.submitStatus)"
          class="c-button"
          type="warning"
          @click="doApplyRemind"
          >撤回</VanButton
        >
      </HorFixedActions>
    </template>
  </HorView>
</template>

<script setup lang="ts">
  import { reqApplyDetail, doApplyRemind } from '@/api'
  import { useProSchemaRender } from '@/components'
  import { useAsyncTask, useParams } from '@pkstar/vue-use'
  import { useQuery } from '@pkstar/vue-use'
  import { applyStatusLabelMap } from '@/utils'
  import { formatDate } from '@pkstar/utils'
  import type { ApplyLeaveDeatil, ApplyOvertimeDeatil } from '@/types'

  const { id } = useParams()
  const query = useQuery()

  const { data, error, loading, trigger } = useAsyncTask(() => reqApplyDetail({ approveId: +id }), {
    immediate: true,
  })

  const fields = useProSchemaRender<ApplyLeaveDeatil | ApplyOvertimeDeatil>((s) => {
    const { startDt, endDt, isAllDay } = s
    return [
      {
        is: 'HorCell',
        label: '用户部门',
        key: 'userdep',
      },
      {
        is: 'HorCell',
        label: '申请时间',
        key: 'createDt',
      },
      {
        is: 'HorCell',
        label: '请假类型',
        key: 'typeName',
      },
      {
        is: 'HorCell',
        label: '开始时间',
        value: formatDate(startDt, 'yyyy-MM-dd'),
      },
      {
        is: 'HorCell',
        label: '结束时间',
        value: formatDate(endDt, 'yyyy-MM-dd'),
      },
      {
        is: 'HorCell',
        label: '请假天数',
        key: 'days',
        hidden: () => !!computedIsOvertime.value || isAllDay === 'N',
      },
      {
        is: 'HorCell',
        label: '请假小时',
        key: 'hours',
        hidden: () => !!computedIsOvertime.value || isAllDay === 'Y',
      },
      {
        is: 'HorCell',
        label: '加班天数',
        key: 'days',
        hidden: () => !computedIsOvertime.value || isAllDay === 'N',
      },
      {
        is: 'HorCell',
        label: '加班小时',
        key: 'hours',
        hidden: () => !computedIsOvertime.value || isAllDay === 'Y',
      },
      {
        is: 'HorCell',
        label: '请假事由',
        key: 'reason',
      },
    ]
  })

  const computedApplyDetail = computed(() => {
    return data?.value?.content?.overtime ?? data.value?.content.leave
  })
  const computedIsOvertime = computed(() => {
    return data?.value?.content?.overtime
  })
  const computedIsActive = computed(() => {
    // 检查 data 和 logs 是否存在
    if (!data.value || !data.value.logs || data.value.logs.length === 0) {
      return 0
    }
    // 查找 activityDt 为空的元素索引
    const index = data.value.logs.findIndex((item) => !item.activityDt)
    // 若找到则返回该索引，否则返回最后一个元素的索引
    return index !== -1 ? index : data.value.logs.length - 1
  })

  const handleEdit = () => {
    console.log('edit')
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/define.scss';
  .header-section {
    @extend %df;
    padding: j(12) j(16);
    background-color: #fff;
    img {
      @extend %br50;
      width: j(80);
      height: j(80);
      margin-right: j(16);
      background-color: #f2f2f2;
    }
    i {
      @extend %cc;
    }
  }
  .header-info {
    @extend %df1;
    @extend %c3;
    h2 {
      @extend %fwb;
      font-size: j(20);
    }
    p {
      margin-top: j(4);
      font-size: j(14);
    }
    ul {
      font-size: j(14);
      margin-top: j(3);
    }
    li {
      display: inline;
      padding: 0 j(8);
      line-height: 1.2;
      border-left: 1px solid #666;
      &:first-child {
        padding-left: 0;
        border-left: none;
      }
    }
  }
</style>
