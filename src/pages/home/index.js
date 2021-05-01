import React, { useEffect, useState } from 'react'
import ComponentHome from './component-home'
import { useQuery } from 'react-query'
import { getTransactions } from '../../api'
import { mappingData } from '../../helpers'

export default function Home() {
  const [select, setSelect] = useState('')
  const [keyword, setKeyword] = useState('')
  const [dataFilter, setDataFilter] = useState()
  const { data, isError, isFetching, isSuccess } = useQuery(
    'transactions',
    getTransactions,
    {
      staleTime: 3000,
    },
  )

  useEffect(() => {
    // useEffect to push state dataFilter, dataFilter is state temporary for feature filter and search
    if (!isError && isSuccess) {
      setDataFilter(mappingData(data))
    }
  }, [data, isError, isSuccess])

  useEffect(() => {
    // useEffect to filter with search. search by beneficiary_name, beneficiary_bank and sender_bank
    if (keyword) {
      let filterData = [...dataFilter].filter(
        (item) =>
          item.beneficiary_name.toLowerCase().includes(keyword) ||
          item.beneficiary_bank.toLowerCase().includes(keyword) ||
          item.sender_bank.toLowerCase().includes(keyword),
      )
      setDataFilter(filterData)
    } else {
      setDataFilter(data && mappingData(data))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword])

  useEffect(() => {
    // useEffect to filter trigger when state.select is update with value from select option filter
    if (select) {
      let filterData = {
        'a-z': [...dataFilter].sort((a, b) =>
          a.beneficiary_name.localeCompare(b.beneficiary_name),
        ),
        'z-a': [...dataFilter].sort((a, b) =>
          b.beneficiary_name.localeCompare(a.beneficiary_name),
        ),
        'new-date': [...dataFilter].sort((a, b) =>
          a.created_at.localeCompare(b.created_at),
        ),
        'old-date': [...dataFilter].sort((a, b) =>
          b.created_at.localeCompare(a.created_at),
        ),
      }
      setDataFilter(filterData[select])
    } else {
      setDataFilter(data && mappingData(data))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select])

  const OnChangeInput = (val) => {
    setKeyword(val.toLowerCase())
  }

  const SelectValue = (val) => {
    setSelect((select) => (select !== val ? val : ''))
  }

  return (
    <ComponentHome
      data={
        keyword.length > 0 || select ? dataFilter : data && mappingData(data)
      }
      countAmount={data && mappingData(data)}
      isSuccess={isSuccess}
      isFetching={isFetching}
      isError={isError}
      onChangeInput={(e) => OnChangeInput(e.target.value)}
      selectValue={(val) => SelectValue(val)}
      selectActive={select}
    />
  )
}
