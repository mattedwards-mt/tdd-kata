require 'rspec/autorun'
require_relative 'turnstile.rb'

describe Turnstile do
  let(:turnstile) { Turnstile.new }
  context "the class" do
    it "can be instantiated" do
      expect(turnstile).to be_a(Turnstile)
    end

    it "has a 'locked' state initially set to 'true'" do
      expect(turnstile.locked).to be_truthy
    end
  end

  describe ".coin" do
    context "given the turnstile is locked" do
      it "unlocks the turnstile" do
        turnstile.coin
        expect(turnstile.locked).to be_falsy
      end
    end

    context "given the turnstile is unlocked" do
      it "outputs a thank you message and remains unlocked" do
        turnstile.locked=(false)
        expect{ turnstile.coin }.to output('Why thank you!').to_stdout
        expect(turnstile.locked).to be_falsy
      end
    end
  end

  describe ".push" do
    context "given the turnstile is locked" do
      it "sounds the alarm" do
        expect{ turnstile.push }.to output('ALARM!').to_stdout
        expect(turnstile.locked).to be_truthy
      end
    end

    context "given the turnstile is unlocked" do
      it "locks the turnstile" do
        turnstile.locked=(false)
        turnstile.push
        expect(turnstile.locked).to be_truthy
      end
    end
  end
end