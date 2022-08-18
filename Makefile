publish:
	scp * stefano@lists.sh:/
.PHONY: upload

ssh:
	ssh stefano@lists.sh
.PHONY: ssh