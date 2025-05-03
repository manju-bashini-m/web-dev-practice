import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(
    items: any[],
    searchText: string,
    category: string,
    tags: string[]
  ): any[] {
    if (!items) {
      return [];
    }
    if (!searchText && !category && (!tags || tags.length === 0)) {
      return items;
    }

    searchText = searchText ? searchText.toLowerCase() : '';
    category = category ? category.toLowerCase() : '';
    tags = tags ? tags.map((tag) => tag.toLowerCase()) : [];

    return items.filter((item) => {
      const matchesTitle = searchText
        ? item.title.toLowerCase().includes(searchText)
        : true;
      const matchesCategory = category
        ? item.category.toLowerCase().includes(category)
        : true;
      const matchesTags =
        tags.length > 0 ? tags.every((tag) => item.tags.includes(tag)) : true;

      return matchesTitle && matchesCategory && matchesTags;
    });
  }
}
