import Image from "next/image"
export const Avatar = ({name,imageSrc})=>{

  return(
    <ul>
      <li>
        <img src={imageSrc} />
        
      </li>
      <li>
        @{name}
      </li>
    </ul>
  )
}