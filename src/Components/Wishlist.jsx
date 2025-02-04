import React from "react";
import W_Cart from "./wishlist-cart/W_Cart";
import W2_Cart from "./wishlist-cart/W2_Cart";

function Wishlist() {
  const CartItems=[
    {
      id:1,
      source:'https://5.imimg.com/data5/KK/CR/MY-5458350/kids-school-bag.jpg',
      priceTag:'-35%'
    },
    {
      id:2,
      source:'https://m.media-amazon.com/images/I/61-Gb7HwMBL.jpg',
      priceTag:'-55%'
    },
    {
      id:3,
      source:'https://cdn3d.iconscout.com/3d/premium/thumb/joystick-3d-icon-download-in-png-blend-fbx-gltf-file-formats--game-controller-gamepad-gaming-tool-pack-video-games-icons-7869753.png?f=webp',
      priceTag:'-24%'
    },
    {
      id:4,
      source:'https://i5.walmartimages.com/seo/Girls-Dress-Casual-Long-Sleeve-100-Cotton-Clothes-for-Toddler-Kids-Girls_89fa07e2-3564-4ba5-8a99-a94b72ad783e.e4eb657fcfc761e23605ee95af3b031d.png',
      priceTag:'-45%'
    },
  ];

  const CartItem2=[
    {
      id:11,
      source:'https://image.made-in-china.com/226f3j00NiMVOLvPLRoq/15-6-Inch-J3455-IPS-8GB-RAM-128GB-SSD-Touch-Screen-Laptop-Netbook-Computer-Lapto-Desktop-PC-Notebook.webp'
    },
    {
      id:12,
      source:'https://s.alicdn.com/@sc04/kf/H3849d72c40b74a558fa3ec191e412a15m.png_720x720q50.png'
    },
    {
      id:13,
      source:'https://i.ebayimg.com/images/g/ViMAAOSwkEtnYUC2/s-l1200.jpg'
    },
    {
      id:14,
      source:'https://s.alicdn.com/@sc04/kf/H8d8845ae67db4d3eb84862129ee96db6r.jpg_720x720q50.jpg'
    },
  ]
  return (
    <>
      <div className="p-20 space-y-3">
        <div className="flex w-full justify-between">
          <h2 className="font-semibold">Wishlist (4)</h2>
          <button className="p-2 border-2 rounded-2xl hover:bg-slate-500 hover:text-white cursor-pointer font-semibold ">
            Move All To Bag
          </button>
        </div>

        <div className="flex w-full justify-between">
          {
            CartItems.map(({id,source,priceTag})=>(
              <W_Cart key={id} PriceTag={priceTag} Source={source} />
            ))
          }
        </div>

        <div className="flex w-full justify-between mt-10">
          <div className="flex">
            <div className="bg-red-500 h-10 border-red-400 block"></div>
            <h2 className="font-semibold">Just for You</h2>
          </div>
          <button className="px-3 py-2 border-2 rounded-2xl hover:bg-slate-500 hover:text-white cursor-pointer font-semibold w-[10%]">
            See All
          </button>
        </div>

        <div className="flex w-full justify-between">
          {
            CartItem2.map(({id,source})=>(
              <W2_Cart key={id} Source={source}/>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Wishlist;
