import Image from "next/image"
const FeaturedProduct = () => {
    return (
        <div className="flex justify-around">
            <div className="">
                <img 
                  src="/pic8.jpg" 
                  alt="Product One" 
                  width={155}
                  height={150}
                />
                <p className="text-center pt-6">PKR 500</p>
                <div className="flex justify-center items-center my-3">
                  <button className="px-2 py-1 bg-blue-500 rounded-md ">
                     BUY NOW
                  </button>
                </div>

                
            </div>


            <div>
                <img 
                  src="/pic2.jpg" 
                  alt="Product Two" 
                  width={150}
                  height={150}
                />
                <p className="text-center pt-5">PKR 300</p>
                <div className="flex justify-center items-center my-3">
                  <button className="px-2 py-1 bg-blue-500 rounded-md ">
                     BUY NOW
                  </button>
                </div>

            </div>

            <div>    
                <img 
                  src="/pic3.jpg" 
                  alt="Product Three" 
                  width={150}
                  height={150}
                />
                <p className="text-center pt-5">PKR 400</p>
                <div className="flex justify-center items-center my-3">
                  <button className="px-2 py-1 bg-blue-500 rounded-md ">
                     BUY NOW
                  </button>
                </div>
            </div>

        </div>
    )
}
export default FeaturedProduct;