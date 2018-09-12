import { Segment, Input, TextArea, Select, Form, Grid, Button, Label } from 'semantic-ui-react'
import formFieldValues from '../lib/form_field_values'

const rateTypeOptions = [
  { text: 'cpm', value: 'cpm' },
  { text: 'cpc', value: 'cpc' },
  { text: 'cpa', value: 'cpa' }
]
export default ({ lineItem, onSave, onDelete }) =>
  <Segment>
    <Label
      corner="right"
      color="red"
      icon="delete"
      size="mini"
      onClick={() => onDelete(lineItem)}
    />
    <Form
      onSubmit={e => {
        e.preventDefault()
        onSave(formFieldValues(e.target))
      }}
      onBlur={e => {
        const { name, type, value } = e.target
        onSave({ [name]: type === 'number' ? +value : value })
      }}
    >
      <Form.Group widths="equal">
        <Form.Field control={TextArea} name="name" label="name" defaultValue={lineItem.name}/>
        <Form.Field>
          <label>start date</label>
          <Input name="startDate" defaultValue={lineItem.startDate}/>
          <label>end date</label>
          <Input name="endDate" defaultValue={lineItem.endDate}/>
        </Form.Field>
        <Form.Field control={Select} name="rateType" label="rate type" options={rateTypeOptions} defaultValue={lineItem.rateType} />
        <Form.Field control={Input} name="budget" type="number" label="budget" defaultValue={lineItem.budget} />
      </Form.Group>
    </Form>
  </Segment>
