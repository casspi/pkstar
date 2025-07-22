<template>
  <div v-for="(list, key) in data" :key="key" class="c-section">
    <div class="c-section-head">
      <h2>{{ mapping[key]?.title }}</h2>
      <!-- <RouterLink
        v-if="mapping[key]?.more"
        class="c-section-more"
        :to="{ path: mapping[key].more, query: { keyword } }"
      >
        查看更多
        <VanIcon name="arrow" />
      </RouterLink> -->
    </div>
    <component
      v-for="(item, index) in list"
      v-bind="mapping[key]"
      :key="index"
      :item="item"
      :is="mapping[key].is"
      :class="{ 'is-nmt': index === 0 }"
    />
  </div>
</template>

<script setup lang="ts">
  import { reqRelationDetail } from '@/api'
  import { useAsyncTask } from '@pkstar/vue-use'
  import type { PropType } from 'vue'
  import InsurancePolicyItem from '@/views/tools/components/InsurancePolicyItem.vue'
  import DoctorItem from '@/views/doctor/components/DoctorItem.vue'
  import InfoCell from '@/components/InfoCell.vue'
  import ClinicalTrialItem from '@/views/info/components/ClinicalTrialItem.vue'
  import MedicalGuidelineItem from '@/views/tools/components/MedicalGuidelineItem.vue'
  import DiseaseOrganizationItem from '@/views/tools/components/DiseaseOrganizationItem.vue'
  import InsuranceCatalogueItem from '@/views/tools/components/InsuranceCatalogueItem.vue'
  import ProjectItem from '@/views/project/components/ProjectItem.vue'
  import DiseaseItem from '@/views/disease/components/DiseaseItem.vue'

  const mapping: any = {
    enterpriseList: {
      value: '0',
      title: '企业',
    },
    doctorList: {
      value: '1',
      title: '医生',
      is: markRaw(DoctorItem),
    },
    hospitalList: {
      value: '2',
      title: '医院',
    },
    volunteerList: {
      value: '3',
      title: '志愿者',
    },
    institutionList: {
      value: '4',
      title: '机构',
    },
    advertisementList: {
      value: '5',
      title: '广告',
      type: 'advertisement',
      is: markRaw(InfoCell),
    },
    infoList: {
      value: '6',
      title: '科普',
      type: 'popular-science',
      is: markRaw(InfoCell),
    },
    trialList: {
      value: '7',
      title: '新药临床',
      is: markRaw(ClinicalTrialItem),
    },
    popularMedicineList: {
      value: '8',
      title: '前沿治疗',
      type: 'popular-medicine',
      is: markRaw(InfoCell),
    },
    activityList: {
      value: '9',
      title: '活动',
    },
    medicalList: {
      value: '10',
      title: '罕见药典',
      is: markRaw(MedicalGuidelineItem),
    },
    policyList: {
      value: '11',
      title: '医保政策',
      is: markRaw(InsurancePolicyItem),
    },
    diseaseOrganizationList: {
      value: '13',
      title: '罕见病组织',
      is: markRaw(DiseaseOrganizationItem),
    },
    insureCataloguesList: {
      value: '14',
      title: '医保目录',
      is: markRaw(InsuranceCatalogueItem),
    },
    projectList: {
      value: '15',
      title: '项目',
      is: markRaw(ProjectItem),
    },
    diseaseList: {
      value: '16',
      title: '罕见病',
      is: markRaw(DiseaseItem),
    },
  }

  const props = defineProps({
    srcId: {
      type: String,
      default: '',
      required: true,
    },
    srcType: {
      type: String as PropType<
        | '0'
        | '1'
        | '2'
        | '3'
        | '4'
        | '5'
        | '6'
        | '7'
        | '8'
        | '9'
        | '10'
        | '11'
        | '13'
        | '14'
        | '15'
        | '16'
      >,
      default: '',
      required: true,
    },
  })

  const { data } = useAsyncTask(
    () =>
      reqRelationDetail({
        srcId: props.srcId,
        srcType: props.srcType,
      }),
    {
      immediate: true,
    },
  )
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/define.scss' as *;
  .is-nmt {
    margin-top: 0;
  }
</style>
