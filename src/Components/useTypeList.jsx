import { useState, useEffect } from "react";

const localCache = {}


// usecustomhooks to trigger change on new type selection



export default function useTypeList(type) {
  const [typeList, setTypeList] = useState([])
  const [status, setStatus] = useState("unloaded")

  useEffect(() => {
    if (!type) {
      setTypeList([])
    } else if (localCache[type]) {
      setTypeList(localCache[type])
    } else {
      requestTypeList()
    }

    async function requestTypeList() {
      setTypeList([])
      setStatus("loading");

      const res = await fetch(
        `https://pokeapi.co/api/v2/type/${type}/`
      )
      const json = await res.json()
      localCache[type] = json.pokemon || []
      setTypeList(localCache[type])
      setStatus("loaded")
      
      }
      
    }, [type])
  return [typeList, status]
}