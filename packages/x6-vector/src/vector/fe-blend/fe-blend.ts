import { FeBase } from '../fe-base/fe-base'
import { SVGFEBlendAttributes, In, BlendMode } from './types'

@FeBlend.register('FeBlend')
export class FeBlend extends FeBase<SVGFEBlendElement> {
  in(): In | string
  in(type: In): this
  in(type: string): this
  in(type: null): this
  in(type?: In | string | null) {
    return this.attr('in', type)
  }

  in2(): In | string
  in2(type: In): this
  in2(type: string): this
  in2(type: null): this
  in2(type?: In | string | null) {
    return this.attr('in2', type)
  }

  mode(): BlendMode
  mode(units: BlendMode | null): this
  mode(units?: BlendMode | null) {
    return this.attr('mode', units)
  }
}

export namespace FeBlend {
  export function create<Attributes extends SVGFEBlendAttributes>(
    attrs?: Attributes | null,
  ) {
    const elem = new FeBlend()
    if (attrs) {
      elem.attr(attrs)
    }
    return elem
  }
}