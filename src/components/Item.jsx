export default function Item({ name, isPacked }) {
  
  return (
    <li>
      {name} { isPacked && ' ✔' }
    </li>
  )
}

/*

// 3항 연산자
<li>
  {isPacked ? name + ' ✔' : name}
</li>

 */