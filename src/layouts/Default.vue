<template lang="pug">
    div
        header.flex.items-center.justify-between.pl-32.pr-32
            h1
                g-link.font-bold.text-6xl.select-none(to='/' class="hover:text-second-secondary") {{ $static.metaData.siteName }}
            div.flex
                nav.mr-6
                    g-link.text-3xl.pr-6.pl-6.select-none(to='/news' class="hover:text-second-secondary") news
                    g-link.text-3xl.pr-6.pl-6.select-none(to='/blog' class="hover:text-second-secondary") blog
                    g-link.text-3xl.pr-6.pl-6.select-none(to='/projects' class="hover:text-second-secondary") projects
        slot
        h1.font-bold.text-center.border.fixed.inset-x-0.bottom-0.bg-primary THIS WEBSITE IS UNDER CONSTRUCTION.
</template>

<static-query>
    query {
      metaData {
        siteName
      }
    }
</static-query>