class Tabs {
    constructor(tabs) {
        this.state = {
            tabs: tabs || [],
            currentTab: 1,
            unclickedTabs: [2, 3, 4]
        }
    }

    setUnclickedTabs(id) {
        this.state.unclickedTabs = this.state.unclickedTabs.filter(item => item !== id)
    }

    setCurrentTab(value) {
        this.state.currentTab = value
    }

    renderTabItems() {
        const componentElement = document.getElementById('tabs-content')
        const html = this.state.tabs
            .find(item => item.id === this.state.currentTab)
            .items.map(
                item => `
                <div class="tabs-content__item">
                <h2>
                    <span class="marker">${item.id}</span>${item.title}
                </h2>
                <ul>
                    ${item.elements
                        .map(
                            element => `
                        <li>
                            <span class="marker marker_green">-</span
                            >${element}
                        </li>
                    `
                        )
                        .join('')}
                </ul>
                </div>
            `
            )
            .join('')
        if (componentElement) {
            componentElement.innerHTML = html
        }
    } 

    unlockButton() {
        const buttonElement = document.getElementById('button');

        if (this.state.unclickedTabs.length === 0) {
          buttonElement.classList.remove('button_disabled');
        }  
    }

    renderTabs() {
        const componentElement = document.getElementById('tabs')
        const html = this.state.tabs
            .map(tab => {
                return `<div class="tab" data-tab-id="${tab.id}">${tab.title}</div>`
            })
            .join('')

        if (componentElement) {
            componentElement.innerHTML = html   

            const tabs = componentElement.getElementsByClassName('tab')
            for (const tab of tabs) {
                const tabId = parseInt(tab.dataset.tabId)

                tab.addEventListener('click', () => {
                    this.setCurrentTab(tabId)
                    this.renderTabItems()
                    this.setUnclickedTabs(tabId)
                    this.unlockButton()
                })
            }
        }
    }
}

const tabs = [
    {
        id: 1,
        title: 'Таб 1',
        items: [
            {
                id: 1,
                title: 'Заголовок таба 1',
                elements: ['Первый', 'Второй', 'Третий'],
            },
            {
                id: 2,
                title: 'Заголовок таба 1',
                elements: ['Первый', 'Второй', 'Третий'],
            },
            {
                id: 3,
                title: 'Заголовок таба 1',
                elements: ['Первый', 'Второй', 'Третий'],
            },
        ],
    },
    {
        id: 2,
        title: 'Таб 2',
        items: [
            {
                id: 1,
                title: 'Заголовок таба 2',
                elements: ['Первый', 'Второй', 'Третий'],
            },
            {
                id: 2,
                title: 'Заголовок таба 2',
                elements: ['Первый', 'Второй', 'Третий'],
            },
            {
                id: 3,
                title: 'Заголовок таба 2',
                elements: ['Первый', 'Второй', 'Третий'],
            },
        ],
    },
    {
        id: 3,
        title: 'Таб 3',
        items: [
            {
                id: 1,
                title: 'Заголовок таба 3',
                elements: ['Первый', 'Второй', 'Третий'],
            },
            {
                id: 2,
                title: 'Заголовок таба 3',
                elements: ['Первый', 'Второй', 'Третий'],
            },
            {
                id: 3,
                title: 'Заголовок таба 3',
                elements: ['Первый', 'Второй', 'Третий'],
            },
        ],
    },
    {
        id: 4,
        title: 'Таб 4',
        items: [
            {
                id: 1,
                title: 'Заголовок таба 4',
                elements: ['Первый', 'Второй', 'Третий'],
            },
            {
                id: 2,
                title: 'Заголовок таба 4',
                elements: ['Первый', 'Второй', 'Третий'],
            },
            {
                id: 3,
                title: 'Заголовок таба 4',
                elements: ['Первый', 'Второй', 'Третий'],
            },
        ],
    },
]

const myTabs = new Tabs(tabs)

myTabs.renderTabItems()
myTabs.renderTabs()
