import React from 'react'

const Shoecard = ({img, selectedImage, setSelectedImage }) => {
  return (
    <div
            className={`border-2 rounded-xl ${
            selectedImage === img.bigShoe
                ? "border-coral-red"
                : "border-transparent"
            } cursor-pointer max-sm:flex-1`}
            onClick={() => {setSelectedImage(img.bigShoe)}}
        >

        <div  className='flex justify-center items-center bg-card bg-center bg-cover xl:w-30 xl:h-30 rounded-xl max-sm:p-4'>
            <img src={img.bigShoe} width={127} height={100}/>
        </div>
    </div>
  )
}

export default Shoecard
