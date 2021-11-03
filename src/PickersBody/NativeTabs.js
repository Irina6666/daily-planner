import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import PickersBodyDay from'./PickersBodyDay'
import PickersBodySevenDay from'./PickersBodySevenDay'
import { withTranslation } from 'react-i18next';
import {Tabs} from 'react-materialize'
import {Tab} from 'react-materialize'


class NativeTabs extends Component {
	render(){
		const { t } = this.props;
		return (  
			<Tabs>
        <Tab
          active
          title={t('DAY')}
          >
          <PickersBodyDay />
        </Tab>
        <Tab
          title={t('MONTH')}
          >
          <PickersBodySevenDay />
        </Tab>
      </Tabs>
		)
	} 
}
export default withTranslation()(NativeTabs);


