import React from 'react'

export const SidebarLeft = (props) => {
  return (
    <div className="rounded-md px-6 py-6 border-r-2">
      <section className="bg-white bg-gradient-to-b from-red-500 to-blue-200 p-3 overflow-hidden rounded-lg">
        <section className="h-20"></section>
        <section className="">
          <section className="flex items-center justify-center">
            {props.userIcon} 
          </section>
          <h3 className="mt-2 text-center text-xl font-semibold">Yorkinjon Abdukhalilov</h3>
          <a className="text-center block text-lg font-normal mb-3" href="#">yorkinjon@gmail.com</a>
          <hr className="my-3 border-2" />
          <section className="text-gray-700 font-medium">
            <section className="flex mb-3 justify-between">
              <p>Who viewed you</p>
              <p>2,543</p>
            </section>
            <section className="flex justify-between">
              <p>Who viewed you</p>
              <p>2,543</p>
            </section>
          </section>
        </section>
      </section>
      <NewsAlerter items={["reactjs", "programming", "softwareengeenering", "design", "developer"]} />
    </div>
  )
}

const NewsAlerter = ({items}) => {
  return (
    <section className="mt-4 p-2 rounded-lg bg-white">
      <h3 className="font-semibold mx-auto text-2xl">Recent</h3>
      <ul>
        {
          items.map((el) => {
            return (
              <li className="my-2 font-medium text-gray-600 cursor-pointer">#{el}</li>
            )
          })
        }
      </ul>
    </section>
  );
}