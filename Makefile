# Makefile for dj-events-frontend
SHELL=/bin/bash
.ONESHELL:


Config:
	@set -ue
	cat <<-EOF
	# Add some Config stuff
	EOF


run.dev:
	@set -ue
	npm run dev
