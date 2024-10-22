import { getDemoNews } from './objects/demoNews';
import Card from './Card';

const demoNews = [
	getDemoNews({
			id: 1,
			title: 'Title 1',
			date: '01.01.2020',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}),
	getDemoNews({
		id: 2,
		title: 'Title long not short',
		date: '07.11.2024',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	}),
	getDemoNews({
		id: 3,
		title: 'Title long not short',
		date: '30.04.2022',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
	}),
	getDemoNews({
		id: 4,
		title: 'Title long not short',
		date: '30.04.2022',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
	})
];



export default function NewsRow({onUpdate, newsLinkTitleState}){
    return <div className="rn-news__news-row">
        {demoNews && demoNews.map( ({id, title, date, description}) => {
            return <Card key={id} title={title} date={date} description={description} onUpdate={onUpdate} newsLinkTitleState={newsLinkTitleState}/>
        })}
    </div>
}