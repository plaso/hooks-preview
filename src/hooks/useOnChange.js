import { useState, useEffect } from 'react';

export default function useOnChange(initialValue) {
  const [value, setValue] = useState(initialValue || "")

  useEffect(() => {
    window.document.title = value

    return () => {
      window.document.title = initialValue || ""
    }
  }, [value, initialValue])

  return { value: value, onChange: setValue }
}