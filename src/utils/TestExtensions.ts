export enum BuildMode {
  TEST,
  DEV,
  PROD
}
const sortBuildModes = [BuildMode.PROD, BuildMode.DEV, BuildMode.TEST]

declare type BuildModeCode = keyof typeof BuildMode

export interface IImportInfo {
  env: BuildMode
  imp: () => Promise<any>
}

export class ImportInfo implements IImportInfo {
  constructor(env: BuildMode, imp: () => Promise<any>) {
    this.env = env
    this.imp = imp
  }

  env: BuildMode
  imp: () => Promise<any>
}

export const EnvImport = async <T>(imports: Array<IImportInfo>) => {
  const env = BuildMode[import.meta.env.VITE_BUILD_MODE as BuildModeCode]
  let target = undefined as unknown as ImportInfo | undefined
  // 尋找目標環境
  target = imports.find((val) => val.env === env)
  // 依序尋找目標
  if (target === undefined) {
    for (const value of sortBuildModes) {
      target = imports.find((val) => val.env === value)
      if (target !== undefined) break
    }
  }
  // 檢核結果
  if (target === undefined) {
    throw Error('不存在 ' + process.env.BUILD_MODE + ' 對應的 Import')
  }
  const imp = await target.imp()
  return new (imp as any).default() as T
}
