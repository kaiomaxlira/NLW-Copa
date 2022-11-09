/* interface HomeProps {
  count: number;
} */

import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'

export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center">

      <main>
        <Image src={logoImg} alt="NLW Copa" /> 

        <h1>Crie seu própio bolão de copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={usersAvatarExampleImg} alt="" />
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder="Qual nome do seu bolão?" />
          <button type="submit">Criar meu bolão</button>
        </form>

        <p> Após criar bolão, você receberá um código único que poderá usar para convidar outras pessoas </p>

        <div>
          <div>
            <Image src={iconCheckImg} alt="" />
            <div>
            <span>+2.834</span>
            <span>Bolões criados</span>
            </div>
          </div>
          <div>
            <Image src={iconCheckImg} alt="" />
            <div>
            <span>+2.834</span>
            <span>Bolões criados</span>
            </div>
          </div>
        </div>
      </main>

        <Image src={appPreviewImg} alt="celulares" quality={100} />
        
    </div>
  )
}

/* export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  return{
    props: {
      count: data.count,
    }
  }
} */
