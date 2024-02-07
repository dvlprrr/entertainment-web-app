/// <reference types="@rsbuild/core/types" />

declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >
  const content: string
  export default content
}
