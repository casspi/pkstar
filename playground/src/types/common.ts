export interface ReqVo<T> {
  cmdType: string
  rtnMsg: string
  content: T
  rtnCode: string
  token: string
  userRoles?: UserRole[]
}
interface UserRole {
  roleId: number
  roleName: string
  roleType: string
  userId: number
}
