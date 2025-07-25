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

      <VanSteps direction="vertical" :active="0">
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
    </template>
  </HorView>
</template>

<script setup lang="ts">
  import { reqApplyDetail } from '@/api'
  import { useProSchemaRender } from '@/components'
  import { useAsyncTask, useParams } from '@pkstar/vue-use'
  import { useQuery } from '@pkstar/vue-use'
  import { applyStatusLabelMap } from '@/utils'
  import { formatDate } from '@pkstar/utils'

  const { id } = useParams()
  const query = useQuery()

  const { data, error, loading, trigger } = useAsyncTask(() => reqApplyDetail({ approveId: +id }), {
    immediate: true,
  })

  const fields = useProSchemaRender<any>((data) => {
    const { startDt, endDt } = data
    return [
      {
        is: 'HorCell',
        label: '用户部门',
        key: 'userdep',
        crlf: true,
      },
      {
        is: 'HorCell',
        label: '申请时间',
        key: 'createDt',
        crlf: true,
      },
      {
        is: 'HorCell',
        label: '请假类型',
        key: 'typeName',
        crlf: true,
      },
      {
        is: 'HorCell',
        label: '开始时间',
        crlf: true,
        value: formatDate(startDt, 'yyyy-MM-dd'),
      },
      {
        is: 'HorCell',
        label: '结束时间',
        crlf: true,
        value: formatDate(endDt, 'yyyy-MM-dd'),
      },
      {
        is: 'HorCell',
        label: '请假天数',
        key: 'days',
        crlf: true,
        hidden: () => {
          return data.value?.content?.leave
        },
      },
      {
        is: 'HorCell',
        label: '请假小时',
        key: 'hours',
        crlf: true,
        hidden: () => {
          return data.value?.content?.leave
        },
      },
      {
        is: 'HorCell',
        label: '加班天数',
        key: 'days',
        crlf: true,
        hidden: () => {
          return data.value?.content?.overtime
        },
      },
      {
        is: 'HorCell',
        label: '加班小时',
        key: 'hours',
        crlf: true,
        hidden: () => {
          return data.value?.content?.overtime
        },
      },
      {
        is: 'HorCell',
        label: '请假事由',
        key: 'reason',
        crlf: true,
      },
    ]
  })

  const computedApplyDetail = computed(() => {
    return data?.value?.content?.overtime ?? data.value?.content.leave
  })
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
