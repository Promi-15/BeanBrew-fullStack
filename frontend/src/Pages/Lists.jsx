import { useEffect, useState } from "react"

const Lists = () => {
  const [coffees, setCoffees] = useState([])
  useEffect(() => {
    const getCoffees = async () => {
      try {
        const res = await fetch("/api/coffee")
        console.log(res)
        if (!res.ok) {
          alert("something wrong" , res.statusText)
        }
        const data = await res.json();
        setCoffees(data)
        console.log(data)
      } catch (error) {
        console.log("not fetching",error)
      }
    }
    getCoffees();
  },[])

  return (
    <div className="grid lg:grid-cols-5   grid-cols-2 gap-5 lg:mt-32 lg:mx-10 mx-5 my-5 " >
      {
        coffees.map((coffee) => (
          <div key={coffee._id} className="" >
            <div className=" object-cover">
              <img src={coffee.image} alt="" className="w-40 h-40 rounded-2xl" />
              <div className="space-y-1.5 mt-2">
                <p className="roboto italic font-bold text-xl">{coffee.coffeeName}</p>
                <p >${ coffee.price}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Lists
