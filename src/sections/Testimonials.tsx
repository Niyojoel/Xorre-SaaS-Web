import {TestimonialItem} from "../components"
import { testimonials } from "../constants"

const Testimonials = () => {
  const halfLength= Math.floor(testimonials.length/2)

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
        <div className="container lg:flex lg:items-start block">
            <div className="testimonials_head-res h-[22vh] lg:sticky lg:top-24 relative z-2 mr-20 flex-300">
                <p className="caption mb-5 max-md:2.5">
                    Wall of Love
                </p>
                <h3 className="h3 max-md:h5 text-[var(--p4)]">
                    Words from our fans
                </h3>
            </div>
            <div className="testimonials_inner-before relative -my-12 mr-3 flex items-start max-lg:static max-md:block overflow-hidden">
                <div className="testimonials_group-after flex-50">
                    {testimonials.slice(0, halfLength).map(testimonial=> (
                        <TestimonialItem key={testimonial.id} item={testimonial} containerClasses="last:after:hidden last:after:max-md:block after:right-0 max-lg:after:-right-1"/> 
                    ))}
                </div>
                <div className="flex-50">
                    {testimonials.slice(halfLength).map(testimonial=> (
                        <TestimonialItem key={testimonial.id} item={testimonial} containerClasses="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12 after:left-0 max-lg:after:left-2"/> 
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials