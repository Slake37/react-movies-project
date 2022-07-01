import {BiSearch} from 'react-icons/bi'

function HomeHeader({handleChange,handleSubmit,search}) {
  return (
    <div className='flex max-h-[100px] px-1 m-auto w-full justify-between align-middle'>
        <h1 className='text-red-500  font-bold p-3'>Moviezzz</h1>
        <form className='text-white  flex justify-between align-middle border-b-2 h-[35px] md:w-[450px]' onSubmit={handleSubmit}>
            <input type="text" name="" onChange={handleChange} value={search} id="" placeholder='Search movie' className='bg-transparent text:xs focus:outline-none w-full mr-2' />
            <button onClick={handleSubmit}>{<BiSearch/>}</button>
        </form>
    </div>
  )
}

export default HomeHeader