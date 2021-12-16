import React,{use} from 'react'

export const MainContent = ({searchIcon, blogTypesSender}) => {
  return (
    <div className="rounded-md px-6 py-6 border-r-2">
      <section className="px-3 bg-white rounded-lg py-3">
        <form className="flex bg-white border-2 px-4 py-3 rounded-xl">
          {searchIcon}
          <input type="text" className="w-full text-xl outline-none" />
        </form>
        <section>
          <ul className="mt-4 flex items-center justify-between">
            {blogTypesSender.map((el) => {
              return (
                <li className="flex items-center cursor-pointer mx-4">
                  {el.icon}
                  <p className="ml-3 text-xl font-medium">{el.text}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </section>
    </div>
  )
}
