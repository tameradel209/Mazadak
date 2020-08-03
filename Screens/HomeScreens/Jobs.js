import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

function Jobs ({navigation}){
    const data = [
        {name:'Accounting - Finance & Banking', num:1000, toPage:'AccountingFinanceBanking'},
        {name:'Engineering', num:1000, toPage:'Engineering'},
        {name:'Designers', num:1000, toPage:'Designers'},
        {name:'Customer Service & Call Center', num:1000, toPage:'Customer_ServiceCall_Center'},
        {name:'Workers & Technicians', num:1000, toPage:'WorkersTechnicians'},
        {name:'Management & Consulting', num:1000, toPage:'ManagementConsulting'},
        {name:'Drivers & Delivery', num:1000, toPage:'DriversDelivery'},
        {name:'Education', num:1000, toPage:'Education'},
        {name:'HR', num:1000, toPage:'HR'},
        {name:'Tourism - Travel & Hospitality', num:1000, toPage:'TourismTravelHospitality'},
        {name:'IT - Telecom', num:1000, toPage:'OtherItems'},
        {name:'Marketing & Public Relations', num:1000, toPage:'MarketingPublicRelations'},
        {name:'Medical - Healthcare & Nursing', num:1000, toPage:'MedicalHealthcareNursing'},
        {name:'Sales', num:1000, toPage:'Sales'},
        {name:'Secretarial', num:1000, toPage:'Secretarial'},
        {name:'Gaurds & Security', num:1000, toPage:'GaurdsSecurity'},
        {name:'Legal - Lawyers', num:1000, toPage:'LegalLawyers'},
        {name:'Other Jobs', num:1000, toPage:'OtherJobs'},
    ]

    const path = ['Jobs'] 

    return (
        <ScrollView>
            {
                data.map( (item, key) => 
                <ListItem 
                    bottomDivider 
                    key={key} 
                    title={item.name} 
                    subtitle={`${item.num} ads`} 
                    onPress={() => navigation.navigate('Search', {search:{category:`${path}${item.name}`}})} 
                    titleStyle={{fontSize:14}}
                    subtitleStyle={{fontSize:9}} />
                    )
            }
        </ScrollView>
    )
}

export default Jobs