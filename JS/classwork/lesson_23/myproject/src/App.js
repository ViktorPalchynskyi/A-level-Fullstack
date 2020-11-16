import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const Header = ({ children }) =>
  <header>
    напхать левого текста
    {children}
    напхать левого текста
</header>

const Sum = ({ a, b }) =>
  <h2>{a + b}</h2>

const Good = ({ img, name, description }) =>
  <div>
    <h2>{name}</h2>
    <p>{description}</p>
    <img src={img} />
  </div>

const defaultGoods = [
  {
    img: '',
    name: 'Вискарик',
    description: 'Ахуэнный',
  },
  {
    img: '',
    name: 'Ром',
    description: 'Так сэ',
  }
]

const GoodList = ({ goods = defaultGoods }) =>
  <div>
    {goods.filter(good => good.name !== 'Ром').map(good => <Good {...good} />)}
  </div>

const MyCheckBox = ({ children }) => {
  const [cheched, setChecked] = useState(true);
  return (
    <button style={{ backgroundColor: cheched ? '#AFA' : '#FAA' }}
      onClick={() => setChecked(!cheched)}>
      {cheched && ' V '}
      {children}
    </button>
  )
}

const MyInput = () => {
  const [text, setText] = useState('my super text');
  return (
    <input type='text' value={text}
      style={{ backgroundColor: text.match(/\d+/) ? '#FAA' : '' }}
      onChange={e => setText(e.target.value.toUpperCase())} />
  )
}


function App() {
  return (
    <>
      <MyInput>

      </MyInput>
      <MyCheckBox>
        some text
      </MyCheckBox>
      <Header>
        <h1> обалдеть компонент </h1>
      </Header>
      <GoodList />
      <Header children={<h1> обалдеть компонент  через children</h1>} />
      {[
        <Sum a="Hello, " b="World" />,
        <Sum a={5} b={2} />]}
      <div children="Текст в диве" />
    </>
  );
}

export default App;
