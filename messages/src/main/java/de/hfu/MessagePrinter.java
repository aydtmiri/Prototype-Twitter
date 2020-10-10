package de.hfu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import de.hfu.messages.domain.model.Message;
import de.hfu.messages.domain.service.MessageService;

@Component
public class MessagePrinter {
	
	@Autowired
	 MessageService message_service;

	 public void setMessageService(MessageService messageService) {
		 this.message_service = messageService;
	 }
	 
	 public void printAllMessages() {
		 for(Message message : message_service.findAllMessages()) {
			 System.out.println(message.getText());
		 }
	 }
	
}
