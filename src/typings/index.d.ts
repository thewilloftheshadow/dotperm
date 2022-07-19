export interface UserOptions {
    debug?: boolean
    starOverrides?: boolean
}

export interface UserPermissions {
    [prop: string]: UserPermissionSet
}

export interface UserPermissionSet {
    [prop: string]: true | UserPermissionSet | null
}
