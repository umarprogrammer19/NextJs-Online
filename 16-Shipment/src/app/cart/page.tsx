import Cartlist from "@/components/cart/cartlist"
import { arr } from "@/utils/productdata"

const Cart = () => {
  return (
    <div className="min-h-[80vh] max-w-[1280px] m-auto p-3 py-20">
      <div className="grid grid-cols-4 w-full border-b py-6">
        <span className="text-base m-auto">Product</span>
        <span className="text-base m-auto">Price</span>
        <span className="text-base m-auto">Quantity</span>
        <span className="text-base m-auto">Subtotal</span>
      </div>
      <div className="sm:space-y-6">
        <Cartlist arr={arr} />
      </div>

      <div className="w-full flex justify-between items-center py-12">
        <button className="xs:px-10 xs:py-3 px-6 py-2 border-[1px] font-medium xs:text-base text-sm rounded-sm border-zinc-500 text-nowrap">Return To Shop</button>
        <button className="xs:px-10 xs:py-3 px-6 py-2 border-[1px] font-medium xs:text-base text-sm rounded-sm border-zinc-500 text-nowrap">Update Cart</button>
      </div>

      <div className="w-full flex justify-between items-start py-10 sm:flex-row flex-col gap-4">
        <div className="flex items-center gap-2">
          <input type="text" className="sm:px-6 xs:w-fit w-[60%] px-4 py-2 focus:outline-none rounded-md border border-zinc-500" placeholder="Coupon Code" />
          <button className="sm:px-6 px-3 sm:py-3 py-[14px] bg-primRed rounded-sm text-white sm:text-sm text-xs">Apply Coupon</button>
        </div>

        <div className="border-2 border-zinc-600 sm:w-96 w-full p-6 rounded-md">
          <h2 className="text-xl font-medium mb-2">Cart Total</h2>
          <div className="w-full flex justify-between items-center border-b border-zinc-400 py-3">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="w-full flex justify-between items-center border-b border-zinc-400 py-3">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="w-full flex justify-center py-2">
            <button className="px-10 mt-2 py-3 bg-primRed rounded-sm text-white text-sm">Procees to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart