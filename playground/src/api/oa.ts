import type { NoticeItem, AttendItem, PagingParams, PagingResult } from '@/types'
import { withLoading } from '@/utils'
import { curl } from './curl'
import type { ReqVo } from '@/types/common'

// 公告列表
export const reqMessageList = withLoading(
  () => curl<ReqVo<Array<NoticeItem>>>(`/user/messages.json`, {}),
  false,
)

// 公告列表
export const reqNoticeList = withLoading(
  (data: PagingParams & { isRead: 'N' | 'Y' }) =>
    curl<ReqVo<Array<NoticeItem>>>(`/oa/noticeList.json`, data),
  false,
)

// 打卡初始化
export const reqAttendInit = withLoading(
  () => curl<ReqVo<AttendItem>>(`/oa/attendList.json`),
  false,
)
