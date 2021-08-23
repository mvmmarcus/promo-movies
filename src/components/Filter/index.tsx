import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import { ParsedUrlQueryInput } from 'querystring'
import xor from 'lodash.xor'

import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'

import * as S from './styles'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  id: number
  label: string
  name: string
}

type Values = ParsedUrlQueryInput

export type FilterProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const Filter = ({ items, onFilter, initialValues = {} }: FilterProps) => {
  const [values, setValues] = useState(initialValues)
  const { query } = useRouter()

  const handleCheckbox = (name: string, value: string) => {
    const currentList = (values[name] as []) || []
    setValues((prev) => ({ ...prev, [name]: xor(currentList, [value]) }))
    onFilter({ ...values, ...query, [name]: xor(currentList, [value]) })
  }

  return (
    <S.Wrapper>
      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={(values[item.name] as string[])?.includes(
                    field.name
                  )}
                  onCheck={() => handleCheckbox(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>
    </S.Wrapper>
  )
}

export default Filter
