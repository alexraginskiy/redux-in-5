import Link from 'next/link'
import { addLineItem, deleteLineItem, updateLineItemValues } from '../store/line_items'
import { totalBudgetSelector, earliestStartDateSelector, latestEndDateSelector } from '../store/with_redux_cool_stuff'
import { connect } from 'react-redux'
import LineItem from '../components/LineItem'
import { Container, Button, Segment, Statistic, Icon } from 'semantic-ui-react'


const ReactDemo = ({
  lineItems,
  totalBudget,
  earliestStartDate,
  latestEndDate,
  currentUser,
  dispatch
}) =>
  <Container>
    <h4>Redux Cool Stuff</h4>

    <div className="header">
      Welcome {currentUser.name}!
    </div>
    <Segment.Group>
      {lineItems.map(li =>
        <LineItem
          key={li.id}
          lineItem={li}
          onSave={values => {
            dispatch(updateLineItemValues(li.id, values))
          }}
          onDelete={li => {
            dispatch(deleteLineItem(li.id))
          }}
        />
      )}
      <Segment>
        <Button primary size="mini"
          onClick={() => dispatch(addLineItem())}
          icon
        >
          <Icon name="plus circle" /> Add line item
        </Button>
      </Segment>
      <Segment secondary>
        <Statistic.Group size="mini" widths={2}>
          <Statistic>
            <Statistic.Label>date range</Statistic.Label>
            <Statistic.Value>{earliestStartDate.toLocaleDateString()} - {latestEndDate.toLocaleDateString()}</Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Label>total budget</Statistic.Label>
            <Statistic.Value>${totalBudget.toLocaleString()}</Statistic.Value>
          </Statistic>
        </Statistic.Group>
      </Segment>
    </Segment.Group>
  </Container>



const mapStateToProps = (state) => ({
  lineItems: state.lineItems,
  totalBudget: totalBudgetSelector(state),
  earliestStartDate: earliestStartDateSelector(state),
  latestEndDate: latestEndDateSelector(state),
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(ReactDemo)
