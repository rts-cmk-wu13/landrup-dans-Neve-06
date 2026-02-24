"use client"
import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function Testimonials({ testimonials = [] }) {
    // Initialize Embla carousel and keep it looping infinitely.
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 6000 })
    ])


    // Navigation helpers used by the previous/next buttons.
    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    return (
        <>
            <div className="embla">
                {/* Embla controls this viewport element via emblaRef. */}
                <h2 className="embla__container-title">Det siger vores kunder om os</h2>
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">

                        {/* Render each testimonial as one slide in the carousel. */}
                        {testimonials.map((testimonial) => (
                            <article className="embla__slide" key={testimonial.id}>
                                <p>{testimonial.content}</p>
                                <p>{testimonial.name}</p>
                                <p>{testimonial.occupation}</p>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="embla__button-container">
                    <button className="embla__button">
                        <IoIosArrowBack style={{ color: "#ffffff" }} onClick={scrollPrev} />
                    </button>
                    <button className="embla__button">
                        <IoIosArrowForward style={{ color: "#ffffff" }} onClick={scrollNext} />
                    </button>
                </div>
            </div>
        </>
    )
}