import React from "react";

function Card() {
  const data = [
    {
      name: "Name 1",
      desc: "Description of name 1",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230524/shT2/646e3154d55b7d0c63d62212/-473Wx593H-460789301-blue-MODEL.jpg",
    },
    {
      name: "Name 2",
      desc: "Descritption of name 2",
      image:
        "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Name 3",
      desc: "Descritption of name 3",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/in/lu28r550uqwxxl/gallery/in-ur55-lu28r550uqwxxl-536896135?$650_519_PNG$",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-400 flex items-center justify-center">
      <div className="flex gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-sky-300 w-64 h-fit p-6 flex flex-col items-center justify-center "
          >
            <div className="w-fit h-64 flex items-center justify-center">
              <img src={item.image} alt="" className="max-w-full max-h-full" />
            </div>
            <h3 className="text-2xl font-semibold mt-2">{item.name}</h3>
            <p className="text-xs mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
