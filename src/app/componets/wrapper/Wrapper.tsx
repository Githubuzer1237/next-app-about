import s from './wrapper.module.css'
const Wrapper = () => {
  return (
    <>

            <section className={s.hero}>
         <div className={s.container}>
         <div className={s.hero__wrapper}>
               <div className={s.hero__text}>
                  <h1>Buy our best egors</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dicta explicabo facere autem!</p>
               </div>
               <div className={s.div}>
                  <img src="https://artist-production.de/wp-content/uploads/2021/04/egor-kreed-3.jpg" alt="" />
               </div>
            </div>
         </div>
         </section>
    </>
  )
}

export default Wrapper
