import React, { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { useMediaQuery } from "react-responsive"
import AOS from "aos"
import "aos/dist/aos.css"

const demoData = [
  {
    title: "Overlanding Trips",
    description:
      "Overlanding is a form of 'slow travel'. It's all about taking the road less travelled, camping across different terrains, and getting away from the tourist trail in overlanding trucks.",
    img: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-freestockpro-3278215.jpg&fm=jpg",
  },
  {
    title: "Beach Adventures",
    description:
      "Discover the serenity of pristine beaches and enjoy exciting water activities in breathtaking coastal locations.",
    img: "https://www.keralatourpackages.com/wp-content/uploads/2023/11/blog-kozhikode-beach-a-hub-for-water-sports-and-adventure.jpg",
  },
  {
    title: "Mountain Escapes",
    description:
      "Experience the thrill of mountain trekking and immerse yourself in the beauty of nature at its finest.",
    img: "https://cdn.shipskis.com/blog/wp-content/uploads/2022/09/AdobeStock_372005733.jpgNEW.jpg",
  },
  {
    title: "Desert Safari",
    description:
      "Explore the vast dunes and enjoy the enchanting beauty of the desert on an unforgettable safari.",
    img: "https://media1.thrillophilia.com/filestore/7k60ff0s3dk8f8jzmfkj88fpviej_Dubai%20Desert%20Safari%20hghg.jpg",
  },
  {
    title: "City Tours",
    description:
      "Dive into the vibrant life of bustling cities and uncover their cultural and historical treasures.",
    img: "https://ik.imgkit.net/3vlqs5axxjf/TW/ik-seo/uploadedImages/Art/2023/0403/T0403TOOTBUS1_C_HR/Day-tours-bounce-back-in-big-cities-but-recovery-i.jpg?tr=w-780%2Ch-440%2Cfo-auto",
  },
]

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
  return (
    <div className="px-4 lg:px-20 py-10 w-full h-screen">
      <div className="flex">
        <div className="lg:w-1/2 md:w-full">
          <h1
            data-aos="flip-up"
            className="text-[32px] font-[400]"
            style={{ fontFamily: "Cabinet Grotesk" }}
          >
            Featured Moments
          </h1>
          <p
            data-aos="fade-left"
            className="mt-4 text-gray-400 text-[14px]"
            style={{ fontFamily: "Raleway" }}
          >
            Our experiences reflect our distinct ethos and core values,
            <br />
            highlighting the very best each of our homes offers.
          </p>
        </div>
      </div>
      <div className="relative w-full mt-10 p-10 lg:p-0">
        {/* Carousel Wrapper */}
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {demoData.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div>
                  <Card>
                    <CardContent className="p-0 space-y-3">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-[400px] h-[280px] hover:scale-105 transition-transform object-cover"
                      />
                      <CardTitle
                        data-aos="flip-up"
                        className="text-[24px] font-[400]"
                        style={{ fontFamily: "Cabinet Grotesk" }}
                      >
                        {item.title}
                      </CardTitle>
                      <CardDescription
                        data-aos="fade-left"
                        className="text-gray-400 text-[14px]"
                        style={{ fontFamily: "Raleway" }}
                      >
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          
          {!isMobile ? (
            <div className="absolute right-16 -top-16 transform -translate-y-1/2 flex flex-col gap-2">
              <CarouselPrevious className=" p-2 rounded-full hover:bg-gray-300">
                &lt;
              </CarouselPrevious>
              <CarouselNext className=" p-2 rounded-full hover:bg-gray-300">
                &gt;
              </CarouselNext>
            </div>
          ) : (
            <>
              <CarouselPrevious className=" p-2 rounded-full hover:bg-gray-300" />
              <CarouselNext className=" p-2 rounded-full hover:bg-gray-300" />
            </>
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default Content
