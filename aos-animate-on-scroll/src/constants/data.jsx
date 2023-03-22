import React from 'react'
import images from './images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight, faCircleDollarToSlot, faEdit, faEnvelopeOpen, faFileAlt, faGroupArrowsRotate, faLocationDot, faPhone, faRocket, faShoppingCart, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

const gradient = 'url(#blue-gradient)'

export const services = [
  {
    id: 1,
    image: images.professionalsImg,
    icon: <FontAwesomeIcon icon={faGroupArrowsRotate} style={{ fill: gradient }} />,
    title: 'Digital Marketing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.'
  },
  {
    id: 2,
    image: images.professionalsImg,
    icon: <FontAwesomeIcon icon={faCircleDollarToSlot} style={{ fill: gradient }} />,
    title: 'Trade Shows',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.'
  },
  {
    id: 3,
    image: images.professionalsImg,
    icon: <FontAwesomeIcon icon={faRocket} style={{ fill: gradient }} />,
    title: 'Branding',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.'
  },
  {
    id: 4,
    image: images.professionalsImg,
    icon: <FontAwesomeIcon icon={faEdit} style={{ fill: gradient }} />,
    title: 'Content Creation',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.'
  },
  {
    id: 5,
    image: images.professionalsImg,
    icon: <FontAwesomeIcon icon={faWandMagicSparkles} style={{ fill: gradient }} />,
    title: 'Graphic Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.'
  },
  {
    id: 6,
    image: images.professionalsImg,
    icon: <FontAwesomeIcon icon={faShoppingCart} style={{ fill: gradient }} />,
    title: 'Media Buying',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.'
  }
]

export const about = [
  {
    id: 7,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor'
  }
]

export const qualities = [
  {
    id: 8,
    icon: <FontAwesomeIcon icon={faFileAlt} style={{ fill: gradient }} />,
    title: 'Ideas & Plans',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.'
  },
  {
    id: 9,
    icon: <FontAwesomeIcon icon={faArrowRotateRight} style={{ fill: gradient }} />,
    title: 'Prompt Strategies',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.'
  }
]

export const features = [
  {
    id: 10,
    icon: <FontAwesomeIcon icon={faGroupArrowsRotate} style={{ fill: gradient, fontSize: '36px' }} />,
    title: 'Digital Marketing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper.'
  },
  {
    id: 11,
    icon: <FontAwesomeIcon icon={faCircleDollarToSlot} style={{ fill: gradient, fontSize: '36px' }} />,
    title: 'Trade Shows',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper.'
  },
  {
    id: 12,
    icon: <FontAwesomeIcon icon={faRocket} style={{ fill: gradient, fontSize: '36px' }} />,
    title: 'Branding',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper.'
  },
  {
    id: 13,
    icon: <FontAwesomeIcon icon={faWandMagicSparkles} style={{ fill: gradient, fontSize: '36px' }} />,
    title: 'Content Creation',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper.'
  },
  {
    id: 14,
    icon: <FontAwesomeIcon icon={faWandMagicSparkles} style={{ fill: gradient, fontSize: '36px' }} />,
    title: 'Graphic Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper.'
  },
  {
    id: 15,
    icon: <FontAwesomeIcon icon={faShoppingCart} style={{ fill: gradient, fontSize: '36px' }} />,
    title: 'Media Buying',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper.'
  }
]

export const portfolio = [
  {
    id: 16,
    title: 'Lorem',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elits',
    image: images.portfolio1
  },
  {
    id: 17,
    title: 'Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elits',
    image: images.portfolio2
  },
  {
    id: 18,
    title: 'Consectur',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elits',
    image: images.portfolio3
  }
]

export const testimonials = [
  {
    id: 19,
    name: 'Marie Jordan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: images.customer1,
    rating: 3
  },
  {
    id: 20,
    name: 'Ann Brown',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: images.customer2,
    rating: 5
  },
  {
    id: 21,
    name: 'Andrew Bill',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: images.customer3,
    rating: 2
  },
  {
    id: 22,
    name: 'Jason Stawer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: images.customer4,
    rating: 4
  },
  {
    id: 23,
    name: 'Lisa Green',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: images.customer5,
    rating: 2
  },
  {
    id: 24,
    name: 'Anna Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    image: images.customer_img_6,
    rating: 4
  }
]

export const contact = [
  {
    id: 25,
    icon: <FontAwesomeIcon icon={faPhone} style={{ fill: gradient }} />,
    info: '+425 235 712',
    text: 'Lorem ipsum dolor sit mattis amet consectetur adipiscing'
  },
  {
    id: 26,
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} style={{ fill: gradient }} />,
    info: 'solnhub@info.com',
    text: 'Lorem ipsum dolor sit mattis amet consectetur adipiscing'
  },
  {
    id: 27,
    icon: <FontAwesomeIcon icon={faLocationDot} style={{ fill: gradient }} />,
    info: 'United Kingdom, New Street',
    text: 'Lorem ipsum dolor sit mattis amet consectetur adipiscing'
  }
]
