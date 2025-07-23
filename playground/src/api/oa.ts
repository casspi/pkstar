import type {
  NoticeItem,
  AttendItem,
  PagingParams,
  PagingResult,
  AttendRecord,
  SignRecord,
  AttendDto,
} from '@/types'
import { withLoading } from '@/utils'
import { curl } from './curl'
import type { ReqVo } from '@/types/common'

// 消息列表
export const reqMessageList = () => curl<Array<NoticeItem>>(`/user/messages.json`, {})

// 公告列表
export const reqNoticeList = withLoading(
  (data: PagingParams & { isRead: 'N' | 'Y' }) =>
    curl<Array<NoticeItem>>(`/oa/noticeList.json`, data),
  false,
)

// 打卡
export const doAttend = withLoading(
  (data: AttendDto) => curl<AttendItem>(`/oa/attend.json`, data),
  true,
)

// 打卡初始化
export const reqAttendInit = withLoading(() => curl<AttendItem>(`/oa/attendList.json`), false)

// 打卡记录
export const reqAttendRecord = (data: { requestMonth: string }) =>
  curl<AttendRecord>(`/oa/attendSummary.json`, data)

// 签到记录
export const reqSignRecord = (data: { requestMonth: string }) =>
  curl<SignRecord>(`oa/signSummary.json`, data)

// 人脸校验
export const reqFaceCheck = withLoading(
  (data: { dataId: string; username: string; image: string }) =>
    curl<'0' | '1'>(`/mbicomm/facematch`, data),
)
