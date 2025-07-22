import { withLoading } from '@/utils'
import { curl } from './curl'
import type {
  PagingParams,
  PagingResult,
  MyAdvocateItem,
  MyLotteryItem,
  MyRewardsItem,
  MyHomePageItem,
  MyHelpItem,
  NeighborItem,
  MyPartnerItem,
  ProjectEnroll,
  MyOrganizationItem,
  MyVolunteerItem,
} from '@/types'

// 我的主页
export const reqMyHomePage = withLoading(
  (data: PagingParams) => curl<PagingResult<MyHomePageItem>>(`app/my/home/page`, data),
  false,
)
// 我的合作伙伴
export const reqMyPartner = withLoading(() => curl<MyPartnerItem[]>(`app/my/partner`), false)

// 我的求助
export const reqMyHelp = withLoading(
  (data: PagingParams) => curl<PagingResult<MyHelpItem>>(`app/my/help`, data),
  false,
)

// 我的倡导
export const reqMyAdvocate = withLoading(
  (data: PagingParams) => curl<PagingResult<MyAdvocateItem>>(`app/my/advocate`, data),
  false,
)

// 我的志愿活动
export const reqMyVolunteer = withLoading(
  (data: PagingParams) => curl<PagingResult<MyVolunteerItem>>(`app/my/activity/volunteer`, data),
  false,
)

// 我的活动
export const reqMyLottery = withLoading(
  (data: PagingParams) => curl<PagingResult<MyLotteryItem>>(`app/my/activity/lotteryDraw`, data),
  false,
)

// 签到
export const doSign = withLoading(
  () => curl(`app/activityDailySignAction`, {}, { method: 'post' }),
  true,
)
// 我的积分
export const reqMyRewards = withLoading(
  (data: PagingParams) => curl<PagingResult<MyRewardsItem>>(`app/my/activity/rewards`, data),
  false,
)

// 同城的圈友
export const reqNeighbor = withLoading(
  (data: PagingParams) => curl<PagingResult<NeighborItem>>(`app/my/neighbor`, data),
  true,
)

// 我的报名
export const reqProjectEnrollList = withLoading(
  (data: PagingParams<Partial<{ keyword: string; projectId?: string }>>) =>
    curl<PagingResult<ProjectEnroll>>(`app/my/application`, data),
  false,
)

// 我的组织
export const reqMineOrganizationList = withLoading(
  (data: PagingParams<Partial<{ keyword: string }>>) =>
    curl<PagingResult<MyOrganizationItem>>(`app/my/organization`, data),
  false,
)

// 提交医生材料
export const doDoctorCompleteInfo = (data: {
  certificateNo: string
  department: string
  hospitalId: string
  issueAuthority: string
  issueDt: string
  job: string
  jobPlan: string
  jobTitle: string
  loginId: string
}) => curl(`app/v2/doctor/info`, data, { method: 'PUT' })
