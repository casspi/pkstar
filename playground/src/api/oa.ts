import type {
  NoticeItem,
  AttendItem,
  PagingParams,
  PagingResult,
  AttendRecord,
  SignRecord,
  AttendDto,
  ApplyItem,
  ApplyDetailVo,
} from '@/types'
import { withLoading } from '@/utils'
import { curl } from './curl'
import type { ReqVo } from '@/types/common'

// 联系
export const reqCustomerContact = () =>
  curl<{ staff: any[]; customer: any[] }>(`/oa/customerContact.json`, {})

// 更新列表
export const reqUpdateList = (data: { bisType: string }) =>
  curl<Array<ApplyItem>>(`/user/updateMessage.json`, data)

// 消息列表
export const reqMessageList = () =>
  curl<Array<NoticeItem>>(`/user/messages.json`, {}).then(() => ({
    messages: [
      {
        bisSubType: 'leave',
        backId: '101-168',
        fromUserId: 764,
        isRead: 'N',
        bisType: 'approve',
        title: 'system通过了我的请假申请',
        userId: 963,
        toUserId: 963,
        content: '申请日期:2025-07-10 2025-09-14 00时至2025-09-14 00时 OK',
        fromName: 'system',
        toUserName: '刘广仓',
        approvalId: 20,
        fromUserImg: 'https://www.bianxiukaoqing.top/images/up/2507/7642025072422userImage42.jpg',
        msgDate: '2025-07-25 10:45:40',
      },
      {
        bisSubType: 'leave',
        backId: '111-178',
        fromUserId: 963,
        isRead: 'N',
        bisType: 'approve',
        title: '刘广仓的审批请求',
        userId: 764,
        toUserId: 764,
        content: '刘广仓的请假申请,等待您的审批,请尽快处理',
        fromName: '刘广仓',
        toUserName: 'system',
        approvalId: 19,
        fromUserImg: 'https://www.bianxiukaoqing.top/images/up/2507/9632025072516userImage40.jpg',
        msgDate: '2025-07-27 16:56:03',
      },
      {
        bisSubType: 'leave',
        backId: '124-192',
        fromUserId: 963,
        isRead: 'N',
        bisType: 'approve',
        title: '刘广仓的审批请求',
        userId: 764,
        toUserId: 764,
        content: '刘广仓的请假申请,等待您的审批,请尽快处理',
        fromName: '刘广仓',
        toUserName: 'system',
        approvalId: 18,
        fromUserImg: 'https://www.bianxiukaoqing.top/images/up/2507/9632025072816userImage81.jpg',
        msgDate: '2025-07-28 15:08:25',
      },
      {
        bisSubType: 'leave',
        backId: '122-190',
        fromUserId: 963,
        isRead: 'N',
        bisType: 'approve',
        title: '刘广仓的审批请求',
        userId: 764,
        toUserId: 764,
        content: '刘广仓的请假申请,等待您的审批,请尽快处理',
        fromName: '刘广仓',
        toUserName: 'system',
        approvalId: 18,
        fromUserImg: 'https://www.bianxiukaoqing.top/images/up/2507/9632025072816userImage81.jpg',
        msgDate: '2025-07-28 14:26:17',
      },
      {
        bisSubType: 'leave',
        backId: '121-189',
        fromUserId: 963,
        isRead: 'N',
        bisType: 'approve',
        title: '刘广仓的审批请求',
        userId: 764,
        toUserId: 764,
        content: '刘广仓的请假申请,等待您的审批,请尽快处理',
        fromName: '刘广仓',
        toUserName: 'system',
        approvalId: 18,
        fromUserImg: 'https://www.bianxiukaoqing.top/images/up/2507/9632025072816userImage81.jpg',
        msgDate: '2025-07-28 14:25:19',
      },
      {
        bisSubType: 'leave',
        backId: '120-188',
        fromUserId: 963,
        isRead: 'N',
        bisType: 'approve',
        title: '刘广仓的审批请求',
        userId: 764,
        toUserId: 764,
        content: '刘广仓的请假申请,等待您的审批,请尽快处理',
        fromName: '刘广仓',
        toUserName: 'system',
        approvalId: 18,
        fromUserImg: 'https://www.bianxiukaoqing.top/images/up/2507/9632025072816userImage81.jpg',
        msgDate: '2025-07-28 14:25:15',
      },
    ],
  }))

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
export const reqAttendInit = withLoading(() => curl<AttendItem[]>(`/oa/attendList.json`), false)

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

// 审批列表
export const reqApplyList = withLoading(
  (
    data: PagingParams & {
      applyType: string
      waitStatus?: string
      auditStatus?: string
      title?: string
    },
  ) => curl<Array<ApplyItem>>(`oa/applyList.json`, data),
)

// 审批详情
export const reqApplyDetail = withLoading((data: { approveId: number }) =>
  curl<ApplyDetailVo>(`oa/applyDetail.json`, data),
)

// 批准审批
export const doApplyDeal = withLoading(
  (content: { status: string; approveId: number[]; comment: string; approveUserId: number }) =>
    curl(`oa/applyDeal.json`, { content }),
)

// 催促审批
export const doApplyRemind = withLoading((data: { approveId: number }) =>
  curl(`oa/askForApprove.json`, data),
)

// 撤回审批
export const doApplyWithdraw = withLoading((data: { approveId: number }) =>
  curl(`oa/applyWithdraw.json`, data),
)
