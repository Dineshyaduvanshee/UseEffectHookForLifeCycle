import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const App = ()=>{
  const [count,setCount] = useState(0);
  useEffect(()=>{
  console.warn("Hello");
  
  },[])
  return(
    <View>
      <Text style={{backgroundColor:'pink',textAlign:'center',color:'red',fontSize:32}}>UseEffect hook for life Cycle {count}</Text>
      <Button title="Update Count" onPress={()=>setCount(count+1)}/>
      </View>
  )
}

export default App;
