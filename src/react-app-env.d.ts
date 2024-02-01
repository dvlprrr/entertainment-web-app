/// <reference types="rsbuild" />

declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >
  const content: string
  export default content
}
declare module "*.png"
declare module "*.module.css"
