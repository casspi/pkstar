// 打卡入参
export interface AttendDto {
  locationName?: string
  locationDetail?: string
  fileIds: string
  longitude: string
  latitude: string
  type: 'sign' | 'attend'
  attendType?: string
  remark: string
}

export interface NoticeItem {
  [x: string]: any
  publishDt: string
}

export interface AttendItem {
  [x: string]: any
}

// 打卡记录
export interface AttendRecord {
  summ: AttendSumm
  sign: AttendSignItem[]
}

interface AttendSignItem {
  dt: string
  locationDetail: string
  location: string
}

export interface AttendSumm {
  tripHour: number
  awayNum: number
  leaveHour: number
  lackNum: number
  earlyNum: number
  normalAttend: number
  userId: number
  outHour: number
  signDays: number
  month: string
  lateNum: number
  attendDays: number
  overHour: number
}

// 签到记录
export interface SignRecord {
  summ: SignSumm
  sign: SignRecordItem[]
}

interface SignRecordItem {
  dt: string
  locationDetail: string
  latitude?: string
  location: string
  longitude?: string
}
interface SignSumm {
  signNum: number
  month: string
  userId: number
}
