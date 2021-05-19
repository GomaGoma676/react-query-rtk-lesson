import { useState, useEffect } from 'react'
import { useStateContext } from '../context/StateProvider'
import axios from 'axios'

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext()
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setLoading(true)
      try {
        const res = await axios('http://127.0.0.1:8000/api/tasks/')
        setTasks(res.data)
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [setTasks])

  return { tasks, isLoading, isError }
}
