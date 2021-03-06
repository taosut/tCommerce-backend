import { AddressTypeEnum } from '../../enums/address-type.enum';
import { OrderStatusEnum } from '../../enums/order-status.enum';

export const TRANSLATIONS = {
  'Your password is outdated, we sent you an email with the instruction on how to update your password': {
    en: 'Your password is outdated, we sent you an email with the instruction on how to update your password',
    ru: 'Ваш пароль устарел, мы отправили вам письмо с инструкцией по обновлению пароля'
  },
  'Cannot find inventory with sku "$1"': {
    en: 'Cannot find inventory with sku "$1"',
    ru: 'Инвентарь с артикулом "$1" не найден'
  },
  'Cannot set quantity: more than "$1" items are ordered': {
    en: 'Cannot set quantity: more than "$1" items are ordered',
    ru: 'Невозможно установить количество: более "$1" уже заказаны'
  },
  'Ordered inventory for sku "$1" and order id "$2" not found': {
    en: 'Ordered inventory for sku "$1" and order id "$2" not found',
    ru: 'Заказанный инвентарь для артикула "$1" и заказа с id "$2" не найден'
  },
  'Attribute with id "$1" not found': {
    en: 'Attribute with id "$1" not found',
    ru: 'Атрибут с id "$1" не найден'
  },
  'Attribute with id "$1" already exists': {
    en: 'Attribute with id "$1" already exists',
    ru: 'Атрибут с id "$1" уже существует'
  },
  'User with such login and password is not registred': {
    en: 'User with such login and password is not registred',
    ru: 'Пользователь с таким логином и паролем не зарегистрирован'
  },
  'Category with id "$1" not found': {
    en: 'Category with id "$1" not found',
    ru: 'Категория с id "$1" не найдена'
  },
  'Category with slug "$1" not found': {
    en: 'Category with slug "$1" not found',
    ru: 'Категория с url "$1" не найден'
  },
  'Currency "$1" not found': {
    en: 'Currency "$1" not found',
    ru: 'Валюта "$1" не найдена'
  },
  'Customer with id "$1" not found': {
    en: 'Customer with id "$1" not found',
    ru: 'Пользователь с id "$1" не найден'
  },
  'Customer not found': {
    en: 'Customer not found',
    ru: 'Пользователь не найден'
  },
  'Customer with email "$1" already exists': {
    en: 'Customer with email "$1" already exists',
    ru: 'Пользователь с email "$1" уже зарегистрирован'
  },
  'Current password is not valid': {
    en: 'Current password is not valid',
    ru: 'Неверный текущий пароль'
  },
  'Customer with login "$1" not found': {
    en: 'Customer with login "$1" not found',
    ru: 'Пользователь с логином "$1" не найден'
  },
  'Your email has been already confirmed': {
    en: 'Your email has been already confirmed',
    ru: 'Ваш email уже подтверждён'
  },
  'No address with id "$1"': {
    en: 'No address with id "$1"',
    ru: 'Адрес с id "$1" не найден'
  },
  'No "email" in payload': {
    en: 'No "email" in payload',
    ru: 'Не указан "email"'
  },
  'Product with sku "$1" not found': {
    en: 'Product with sku "$1" not found',
    ru: 'Товар с артикулом "$1" не найден'
  },
  'Not enough quantity in stock. You are trying to add: $1. In stock: $2': {
    en: 'Not enough quantity in stock. You are trying to add: $1. In stock: $2',
    ru: 'Недостаточно товара в наличии. Вы пытаетесь добавить: $1. В наличии: $2'
  },
  'Order with id "$1" not found': {
    en: 'Order with id "$1" not found',
    ru: 'Заказ с id "$1" не найден'
  },
  'Cannot edit order with status "$1"': {
    en: 'Cannot edit order with status "$1"',
    ru: 'Нельзя редактировать заказ со статусом "$1"'
  },
  'Cannot cancel order with status "$1"': {
    en: 'Cannot cancel order with status "$1"',
    ru: 'Нельзя отменить заказ со статусом "$1"'
  },
  'Cannot change status to "$1": order must be with status "$2"': {
    en: 'Cannot change status to "$1": order must be with status "$2"',
    ru: 'Нельзя сменить статус на "$1": заказ должен быть в статусе "$2"'
  },
  'Cannot change status to "$1": order must not be with status "$2"': {
    en: 'Cannot change status to "$1": order must not be with status "$2"',
    ru: 'Нельзя сменить статус на "$1": заказ не должен быть в статусе "$2"'
  },
  'Cannot change status to "$1": order is not paid': {
    en: 'Cannot change status to "$1": order is not paid',
    ru: 'Нельзя сменить статус на "$1": заказ не оплачен'
  },
  'Cannot change status to "$1": disallowed status': {
    en: 'Cannot change status to "$1": disallowed status',
    ru: 'Нельзя сменить статус на "$1": запрещённый статус'
  },
  'Cannot start order with status "$1"': {
    en: 'Cannot start order with status "$1"',
    ru: 'Нельзя принять в работу заказ со статусом "$1"'
  },
  'Cannot ship order with status "$1"': {
    en: 'Cannot ship order with status "$1"',
    ru: 'Нельзя отправить заказ со статусом "$1"'
  },
  'Page with url "$1" not found': {
    en: 'Page with url "$1" not found',
    ru: 'Страница с url "$1" не найдена'
  },
  'Payment method with id "$1" not found': {
    en: 'Payment method with id "$1" not found',
    ru: 'Способ оплаты с id "$1" не найден'
  },
  'Shipping method with id "$1" not found': {
    en: 'Shipping method with id "$1" not found',
    ru: 'Способ доставки с id "$1" не найден'
  },
  'User with id "$1" not found': {
    en: 'User with id "$1" not found',
    ru: 'Пользователь с id "$1" не найден'
  },
  'Product with id "$1" not found': {
    en: 'Product with id "$1" not found',
    ru: 'Товар с id "$1" не найден'
  },
  'Product with slug "$1" not found': {
    en: 'Product with slug "$1" not found',
    ru: 'Товар с url "$1" не найден'
  },
  'Review with id "$1" not found': {
    en: 'Review with id "$1" not found',
    ru: 'Отзыв с id "$1" не найден'
  },
  'Blog post with id "$1" not found': {
    en: 'Blog post with id "$1" not found',
    ru: 'Блог пост с id "$1" не найден'
  },
  'Blog category with id "$1" not found': {
    en: 'Blog category with id "$1" not found',
    ru: 'Блог категория с id "$1" не найдена'
  },
  'You have already voted for this review': {
    en: 'You have already voted for this review',
    ru: 'Вы уже голосовали за этот отзыв'
  },
  'You have already rated this product': {
    en: 'You have already rated this product',
    ru: 'Вы уже оценили этот товар'
  },
  'Unknown OAuth provider': {
    en: 'Unknown OAuth provider',
    ru: 'Неизвестный тип OAuth'
  },
  'Token in request not found': {
    en: 'Token in request not found',
    ru: 'Токен в запросе не найден'
  },
  'Reset password link is invalid or expired': {
    en: 'Reset password link is invalid or expired',
    ru: 'Ссылка для восстановления пароля неверна или устарела'
  },
  'Shipment sender not provided': {
    en: 'Shipment sender not provided',
    ru: 'Не указан отправитель'
  },
  [AddressTypeEnum.WAREHOUSE]: {
    en: 'To the Nova Poshta post office',
    ru: 'В отделение Новой Почты'
  },
  [AddressTypeEnum.DOORS]: {
    en: 'Courier delivery',
    ru: 'Адресная доставка Новой Почтой'
  },
  [OrderStatusEnum.NEW]: {
    en: 'New',
    ru: 'Новый'
  },
  [OrderStatusEnum.PROCESSING]: {
    en: 'Processing',
    ru: 'Обрабатывается'
  },
  [OrderStatusEnum.READY_TO_PACK]: {
    en: 'Ready to pack',
    ru: 'Готово к упаковке'
  },
  [OrderStatusEnum.PACKED]: {
    en: 'Packed',
    ru: 'Упакован'
  },
  [OrderStatusEnum.READY_TO_SHIP]: {
    en: 'Ready to ship',
    ru: 'Готово к отправке'
  },
  [OrderStatusEnum.SHIPPED]: {
    en: 'Shipped',
    ru: 'Отправлен'
  },
  [OrderStatusEnum.FINISHED]: {
    en: 'Finished',
    ru: 'Завершён'
  },
  [OrderStatusEnum.RECIPIENT_DENIED]: {
    en: 'Recipient denied',
    ru: 'Получатель отказался'
  },
  [OrderStatusEnum.RETURNING]: {
    en: 'Returning',
    ru: 'Возвращается'
  },
  [OrderStatusEnum.RETURNED]: {
    en: 'Returned',
    ru: 'Возвращён'
  },
  [OrderStatusEnum.REFUSED_TO_RETURN]: {
    en: 'Refused to return',
    ru: 'Отказ от возврата'
  },
  [OrderStatusEnum.CANCELED]: {
    en: 'Canceled',
    ru: 'Отменён'
  },
  'Confirm email link is invalid or expired': {
    en: 'Confirm email link is invalid or expired',
    ru: 'Ссылка для подтверждения пароля неверна или устарела'
  },
  'Cumulative discount': {
    en: 'Cumulative discount',
    ru: 'Накопительная скидка'
  },
  'Order amount over $1 uah': {
    en: 'Order amount over $1 uah',
    ru: 'Сумма заказа более $1 грн'
  }
}
