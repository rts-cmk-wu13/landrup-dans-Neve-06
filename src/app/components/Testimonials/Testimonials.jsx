"use client"
import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export default function Testimonials({ testimonials = [] }) {
    // Initialize Embla carousel and keep it looping infinitely.
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 6000 })
    ])


    // Navigation helpers used by the previous/next buttons.
    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    return (
        <div className="embla">
            {/* Embla controls this viewport element via emblaRef. */}
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {/* Render each testimonial as one slide in the carousel. */}
                    {testimonials.map((testimonial) => (
                        <article className="embla__slide" key={testimonial.id}>
                            <p>{testimonial.name}</p>
                            <p>{testimonial.content}</p>
                        </article>
                    ))}
                </div>
            </div>

            <button className="embla__prev" onClick={scrollPrev}>
                Scroll to prev
            </button>
            <button className="embla__next" onClick={scrollNext}>
                Scroll to next
            </button>
        </div>
    )
}