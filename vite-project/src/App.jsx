import './App.css';
import TwitterFollowCard from './TwitterFollowCard';

const users =[
  {
    name:"Miguel Angel Duran",
    userName:'midudev',
    isFollowing: true
  },
  {
    name:"Lorena De Armas",
    userName:'LoreLor',
    isFollowing: false
  },
  {
    name:"Cristina kirchner",
    userName:'CFKArgentina',
    isFollowing: true
  }
]



function App() { 
  const formatUserName = (userName) => `@${userName}`
 
  return (
    <div className='App'>
        {
          users?.map((u) => (
            <TwitterFollowCard 
                key={u.userName}
                name={u.name}
                userName={u.userName} 
                initialIsFollowing={u.isFollowing}
                formatUserName={formatUserName}
            />
          ))
        }
    </div>  
  )
}

export default App
