I Создать главный экран
	I.1 Происходит и присваивается Fetch к стейту
	I.1.1 У Redux есть пункт isFetched
	I.1.1.a Fetch resolve?isFetched=true:isFetched=false
	I.2 Раздаётся Fetch в Redux

II На главном экране создается 4 компонента

    (url === '/')?(0-Компонент Head):(0-Компонент ReturnHome)
	
	II.1 Создаётся компонент Card
	II.1.1 Редактируется разметка компонента Card
	II.1.1.a <h1>{props.name} <h2>{props.type} <h3>{props.descr}
	II.1.1.b onclick=handler
		 handler{Route to ReactRouters direct Card Link}
		 

(1-Прошедшие запуски)
	isFetched ?  
	fetch.past.map(return <Card posts={posts.past}/>
	:
	sceleton

(2-Предстоящие запуски)
	2.1. fetch.next.map(return <Card posts={posts.next}/>
	:
	2.2 sceleton

	2.3 useDrag	
	    Обернуть Card в UseDrag
	Применить логику оповещения и подтверждения

(3-Мои запуски)
